type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export const genderTypes = ['MALE', 'FEMALE'] as const;

export type Gender = (typeof genderTypes)[number];
