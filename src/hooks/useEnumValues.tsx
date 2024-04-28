export const useEnumKeys = <T extends object>(enumObject: T): Array<T[keyof T]> => {
    return Object.keys(enumObject) as Array<T[keyof T]>;
};

export const useEnumValues = <T extends object>(enumObject: T): Array<T[keyof T]> => {
    return Object.values(enumObject);
};
