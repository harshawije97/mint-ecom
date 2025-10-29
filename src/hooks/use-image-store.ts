import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

interface useImageUploadStoreInterface {
    url: string,
    setUrl: (url: string) => void
    removeUrl: () => void
}

export const useCoverImageUploadStore = create<useImageUploadStoreInterface>()(
    persist(
        (set) => ({
            url: "",
            setUrl: (url: string) => set({ url }),
            removeUrl: () => set({ url: "" })
        }),
        {
            name: "cover-image-upload",
            storage: createJSONStorage(() => localStorage)
        }
    )
);

export const useFeatureImageUploadStore = create<useImageUploadStoreInterface>()(
    persist(
        (set) => ({
            url: "",
            setUrl: (url: string) => set({ url }),
            removeUrl: () => set({ url: "" })
        }),
        {
            name: "feature-image-upload",
            storage: createJSONStorage(() => localStorage)
        }
    )
);

export const useImageUploadStore = create<useImageUploadStoreInterface>()(
    persist(
        (set) => ({
            url: "",
            setUrl: (url: string) => set({ url }),
            removeUrl: () => set({ url: "" })
        }),
        {
            name: "image-upload",
            storage: createJSONStorage(() => localStorage)
        }
    )
);