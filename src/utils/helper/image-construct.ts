import { MediaValueObject } from "@/lib/types";

const imageConstructor = (values: MediaValueObject): MediaValueObject => {
    const { name, file, type } = values;
    const randomName = Math.random().toString(36).substring(2, 9);
    const fileName = `${randomName}-${name}`.replace(/\s/g, '-');
    return { name: fileName, file, type };
}

export default imageConstructor;