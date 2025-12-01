import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/*
	cn()은 dropdown 등 모든 UI 구성에서 공통 유틸리티로 사용하는 범용 함수
	--> Tailwind 기반 프로젝트에서 사용하는 범용 함수
*/
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
