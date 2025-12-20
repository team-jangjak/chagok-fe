/*
  [습관 생성 페이지 2번째 페이지]
	-> 습관 제목 입력 등의 기본적인 세부 정보를 입력하는 페이지
*/
import { useState, useEffect } from 'react';
import DataInput from '@shared/ui/DataInput';
import PillButton from '@shared/ui/PillButton';
import DatePicker from '@shared/ui/DatePicker';
import DropdownMenu from '@shared/ui/DropdownMenu';
import RadioButton from '@shared/ui/RadioButton';

// 카테고리 데이터 (목데이터로 8개)
const categoriesInitialData = [
  {
    id: 1,
    name: '운동',
    isSelected: false,
  },
  {
    id: 2,
    name: '휴식',
    isSelected: false,
  },
  {
    id: 3,
    name: '책',
    isSelected: false,
  },
  {
    id: 4,
    name: '음악',
    isSelected: false,
  },
  {
    id: 5,
    name: '공부',
    isSelected: false,
  },
  {
    id: 6,
    name: '재미',
    isSelected: false,
  },
  {
    id: 7,
    name: '좀',
    isSelected: false,
  },
  {
    id: 8,
    name: '볼래',
    isSelected: false,
  },
];

interface Category {
  id: number;
  name: string;
  isSelected: boolean;
}

interface CreateHabitPage2Props {
  setNextIsEnabled: (isEnabled: boolean) => void;
}

function CreateHabitPage2({ setNextIsEnabled }: CreateHabitPage2Props) {
  const [categories, setCategories] = useState<Category[]>(categoriesInitialData);
  const [isPublic, setIsPublic] = useState<boolean>(false);

  // 임시로 side-effect로 구현 - 나중에 상태 관리 로직으로 변경 필요
  useEffect(() => {
    if (isPublic && categories.some((category) => category.isSelected)) {
      setNextIsEnabled(true);
    } else {
      setNextIsEnabled(false);
    }
  }, [setNextIsEnabled, categories, isPublic]);

  // 카테고리 클릭 시 선택 여부 변경
  const handleCategoryClick = (id: number) => {
    setCategories(
      categories.map((category) =>
        category.id === id ? { ...category, isSelected: !category.isSelected } : category
      )
    );
  };
  return (
    <>
      {/* 헤더 영역 */}
      <div className="w-full mb-4 flex flex-col items-start justify-start gap-3">
        <span className="text-3xl font-bold text-text">정보 입력</span>
        <span className="text-lg font-normal text-darkgray">습관의 세부 정보를 입력해 주세요</span>
      </div>
      {/* 입력할 창들 나열한 레이아웃 - mask로 상단/하단 페이드 효과 적용 */}
      <div
        className="w-full flex-1 flex flex-col pb-24 pt-5 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-10"
        style={{
          // 상단 페이드 효과 적용
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 32px, black calc(100% - 48px), transparent 100%)',
          // 하단 페이드 효과 적용
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 32px, black calc(100% - 48px), transparent 100%)',
        }}
      >
        {/* 제목 영역 */}
        <div className="w-full flex flex-col gap-3">
          <span className="text-2xl font-bold text-foreground">제목</span>
          <DataInput className="w-full" placeholder="제목을 입력해 주세요" />
        </div>
        {/* 카테고리 영역 */}
        <div className="w-full flex flex-col gap-3">
          <span className="text-2xl font-bold text-foreground">카테고리</span>
          <div className="w-full grid grid-cols-4 gap-3">
            {categories.map((category) => (
              <PillButton
                className="w-full h-8"
                isSelected={category.isSelected}
                handleOptionClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </PillButton>
            ))}
          </div>
        </div>
        {/* 수행 기간 입력*/}
        <div className="w-full flex flex-col gap-3">
          <span className="text-2xl font-bold text-foreground">수행 기간</span>
          <div className="w-full flex flex-row items-center justify-between gap-3">
            <DatePicker className="w-full" />
            <span className="text-lg font-bold text-foreground">~</span>
            <DatePicker className="w-full" />
          </div>
        </div>
        {/* 빈도 입력*/}
        <div className="w-full flex flex-col gap-3">
          <span className="text-2xl font-bold text-foreground">빈도</span>
          <div className="w-full flex flex-row items-center justify-start gap-4">
            <DropdownMenu options={['일', '월', '년']} placeholder="기간" className="w-28" />
            <DataInput className="w-28" placeholder="수량" />
            <span className="text-lg font-bold text-foreground">회</span>
          </div>
        </div>
        {/* 공개 여부 */}
        <div className="w-full flex flex-col gap-3">
          <span className="text-2xl font-bold text-foreground">공개 여부</span>
          <div className="w-full flex flex-row items-center justify-start gap-4">
            <RadioButton
              className="w-8 h-8"
              isChecked={isPublic}
              handleOptionClick={() => setIsPublic((prev) => !prev)}
            />
            <span className="text-lg font-medium text-foreground">공개하기</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateHabitPage2;
