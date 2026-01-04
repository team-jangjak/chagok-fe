// bottom sheet 컴포넌트

import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { useState } from 'react';

interface BottomSheetProps {
  open: boolean; // BottomSheet 열림/닫힘 상태
  onClose: () => void; // BottomSheet를 닫을 떄 실행되는 콜백 (X 버튼 클릭, 아래로 드래그해서 닫을 때, 외부 영역 클릭 시)
  initialView: (helpers: {
    // 함수 형태로 받아 helper를 주입함
    setView: (v: React.ReactNode) => void; // URL이 변경되지 않으면서 시트 내부에서 다른 화면으로 전환 시 사용
    close: () => void; // 시트를 닫고 싶을때 사용
  }) => React.ReactNode;
  className?: string; //DrawerContent에 추가로 적용할 Tailwind 클래스
}

function BottomSheet({ open, onClose, initialView, className }: BottomSheetProps) {
  const [view, setView] = useState<React.ReactNode | null>(null);

  return (
    <Drawer
      open={open}
      onOpenChange={(v) => {
        if (!v) onClose();
      }}
      snapPoints={[0.9, 1]} // {[처음 실행시 높이, 끌어올릴 수 있는 최대 높이]}
    >
      <DrawerContent
        className={cn('rounded-t-2xl flex flex-col max-h-dvh mx-auto w-full max-w-160', className)}
      >
        {/* 헤더 */}
        <div className="flex shrink-0 items-center justify-end py-5">
          <Button onClick={onClose} variant="ghost" className="cursor-pointer">
            <X className="w-8 h-8 text-black" />
          </Button>
        </div>

        {/* 콘텐츠 */}
        <div
          className="flex-1 overflow-y-auto px-5 pb-6 overscroll-contain [scrollbar-width:none]
    [-ms-overflow-style:none]
    [&::-webkit-scrollbar]:hidden"
        >
          {view ??
            initialView({
              setView,
              close: onClose,
            })}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default BottomSheet;
