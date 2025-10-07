import { BadgeDollarSign, ClipboardList, FolderKanban, LayoutPanelLeft, LucideIcon, Package, Palette, Search, Settings, Shirt, TruckElectric, Users2 } from "lucide-react";

type Route = {
    key: string
    label: string
    routeGroup: ParentRoute[]
}

type ParentRoute = {
    key: string;
    title: string;
    url: string;
    icon: LucideIcon;
    children: boolean;
    childrenRoutes: ChildRoute[] | null;
}

type ChildRoute = {
    title: string;
    url: string;
    icon: LucideIcon;
}

export const routes: Route[] = [
    {
        key: crypto.randomUUID(),
        label: "overview",
        routeGroup: [
            {
                key: crypto.randomUUID(),
                title: "Dashboard",
                url: "#",
                icon: LayoutPanelLeft,
                children: false,
                childrenRoutes: null
            },
            {
                key: crypto.randomUUID(),
                title: "Projects",
                url: "/projects",
                icon: FolderKanban,
                children: false,
                childrenRoutes: null
            },
            {
                key: crypto.randomUUID(),
                title: "Search",
                url: "#",
                icon: Search,
                children: false,
                childrenRoutes: null
            }
        ]
    },
    {
        key: crypto.randomUUID(),
        label: "commerce",
        routeGroup: [
            {
                key: crypto.randomUUID(),
                title: "Products",
                url: "./products",
                icon: Package,
                children: true,
                childrenRoutes: [
                    {
                        title: "Colors",
                        url: "./products/colors?productID=123",
                        icon: Palette
                    }, {
                        title: "Sizes",
                        url: "./products/sizes?productID=123",
                        icon: Shirt
                    }, {
                        title: "Pricing",
                        url: "./products/pricing?productID=123",
                        icon: BadgeDollarSign
                    }
                ]
            },
            {
                key: crypto.randomUUID(),
                title: "Categories",
                url: "#",
                icon: ClipboardList,
                children: false,
                childrenRoutes: null
            },
            {
                key: crypto.randomUUID(),
                title: "Orders",
                url: "#",
                icon: TruckElectric,
                children: false,
                childrenRoutes: null
            }
        ]

    },
    {
        key: crypto.randomUUID(),
        label: "application",
        routeGroup: [
            {
                key: crypto.randomUUID(),
                title: "Users",
                url: "#",
                icon: Users2,
                children: false,
                childrenRoutes: null
            },
            {
                key: crypto.randomUUID(),
                title: "Settings",
                url: "./settings",
                icon: Settings,
                children: false,
                childrenRoutes: null
            }
        ]
    }
]