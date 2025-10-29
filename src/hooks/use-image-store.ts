import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

interface useCoverImageUploadStoreInterface {
    url: string,
    setUrl: (url: string) => void
    removeUrl: () => void
}

export const useCoverImageUploadStore = create<useCoverImageUploadStoreInterface>()(
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