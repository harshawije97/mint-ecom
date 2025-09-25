import { ClipboardList, FolderKanban, LayoutPanelLeft, LucideIcon, Package, Palette, Search, Settings, Shirt, TruckElectric, Users2, Warehouse } from "lucide-react";

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
                url: "#",
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
                url: "#",
                icon: Package,
                children: false,
                childrenRoutes: null
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
                title: "Merchants",
                url: "#",
                icon: Warehouse,
                children: true,
                childrenRoutes: [
                    {
                        title: "Colors",
                        url: "#",
                        icon: Palette
                    }, {
                        title: "Sizes",
                        url: "#",
                        icon: Shirt
                    }
                ]
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
                url: "#",
                icon: Settings,
                children: false,
                childrenRoutes: null
            }
        ]
    }
]