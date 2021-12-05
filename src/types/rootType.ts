export interface ReturnMessages {
  [key: string]: string;
}

export interface CommonOption {
  showFieldName: boolean;
  field: string;
}

export interface StringFieldInfor extends CommonOption {
  min: number;
  max: number;
  length: number;
}
export interface NumberFieldInfor extends CommonOption {
  min: number;
  max: number;
  greater: number;
  less: number;
}
export interface ArrayFieldInfor extends CommonOption {
  min: number;
  max: number;
  length: number;
}
export interface BooleanFieldInfor extends CommonOption {}
export interface DateFieldInfor extends CommonOption {
  greater: string;
  less: string;
  max: string;
  min: string;
}
export interface ObjectFieldInfor extends CommonOption {
  length: number;
  max: number;
  min: number;
}
export interface JoiMessageType {
  createStringMessages: (options: Partial<StringFieldInfor>) => ReturnMessages;
  createNumberMessages: (options: Partial<NumberFieldInfor>) => ReturnMessages;
  createArrayMessages: (options: Partial<ArrayFieldInfor>) => ReturnMessages;
  createBooleanMessages: (options: Partial<BooleanFieldInfor>) => ReturnMessages;
  createDateMessages: (options: Partial<DateFieldInfor>) => ReturnMessages;
  createObjectMessages: (options: Partial<ObjectFieldInfor>) => ReturnMessages;
}
