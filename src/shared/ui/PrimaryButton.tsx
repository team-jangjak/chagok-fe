/*
	<화면을 넘어가는 등의 '큰 버튼' 컴포넌트>

	- 버튼 클릭 시, 화면을 넘어가는 등의 작업을 수행하는 경우에 사용
	- title로 버튼 타이틀을 전달하고, onClick으로 버튼 클릭 시 수행할 함수를 전달

	[컴포넌트 사용 유의사항]
	-> title은 2줄 이하로 사용하는 것을 권장
	-> 부모 컴포넌트에 absolute 클래스를 추가하여 버튼을 화면 하단에 고정시켜야 함
*/

// 유의사항:
function PrimaryButton({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="absolute bottom-8 w-[calc(100%-32px)] mx-8 py-4 text-center cursor-pointer rounded-2xl font-light bg-darkgray text-white transition-all hover:bg-primary hover:text-white hover:font-bold"
    >
      <span className="text-xl">{title}</span>
    </div>
  );
}

export default PrimaryButton;
