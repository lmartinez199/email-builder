export interface Template {
  id: string;
  name: string;
  subject: string;
  category: string;
  htmlContent: string;
  variables: string[];
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
}

export type CreateTemplateInput = Omit<Template, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateTemplateInput = Partial<CreateTemplateInput> & Pick<CreateTemplateInput, 'name' | 'subject'>;
