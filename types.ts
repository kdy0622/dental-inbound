export interface GlossaryTerm {
  category: string;
  term_eng: string;
  pronunciation?: string;
  term_kor: string;
  description: string;
  related_terms?: string[];
}

export interface ConsultationScript {
  situation: string;
  content: string;
}

export interface ChecklistItem {
  type: string;
  item: string;
}

export interface ReservationMessage {
  step: string;
  content: string;
}

export interface ManualData {
  hospital_name: string;
  document_date: string;
  purpose: string;
  glossary: GlossaryTerm[];
  consultation_scripts: ConsultationScript[];
  new_patient_checklist: ChecklistItem[];
  reservation_management: ReservationMessage[];
}

export type ViewState = 'dashboard' | 'glossary' | 'scripts' | 'checklist' | 'templates' | 'quiz';