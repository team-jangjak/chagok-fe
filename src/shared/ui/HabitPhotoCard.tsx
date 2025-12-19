/*
	그리드 레이아웃에서 
	'습관' 템플릿, 다른 사람들의 '습관'을 살펴볼 때 사용하는 카드 컴포넌트

	[props 설명]
	-> className: 컴포넌트에 적용할 커스텀 tailwind 스타일 클래스
	-> frequency: 빈도수
	-> durationInfo: 진행 기간 정보 (ex. '1달 도전' 등)
	-> habitTitle: 습관 제목 (ex. '물구나무서기')
	-> photoImgSrc: 습관 사진 이미지 소스
*/
import habitPhoto from '@assets/mockdata/handstand.png';

interface HabitPhotoCardProps {
  frequency: string;
  durationInfo: string;
  habitTitle: string;
  photoImgSrc?: string;
}

function HabitPhotoCard({
  frequency,
  durationInfo,
  habitTitle,
  photoImgSrc = habitPhoto,
}: HabitPhotoCardProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-3 bg-white/0">
      {/* 사진을 표현하는 상단 영역 */}
      <div className="w-full h-auto relative">
        <img
          src={photoImgSrc}
          alt="습관 사진"
          className="w-full h-auto object-contain border border-foreground/50 rounded-md"
        />
        {/* 사진 위에 올라갈 빈도수 표시 영역 */}
        <div className="absolute bottom-2 left-2 w-fit h-fit bg-white border border-foreground/50 rounded-md px-2">
          <span className="text-xs text-foreground">{frequency}</span>
        </div>
      </div>
      {/* 습관 정보를 글로 표현한 하단 영역 */}
      <div className="w-full h-4 flex flex-row items-center justify-between bg-white/0">
        <span className="text-sm text-foreground">{durationInfo}</span>
        <span className="text-sm font-bold text-foreground">{habitTitle}</span>
      </div>
    </div>
  );
}

export default HabitPhotoCard;
