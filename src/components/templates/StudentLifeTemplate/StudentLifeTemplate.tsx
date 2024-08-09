import React from "react";

function StudentLifeTemplate({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full">
      <div className="pb mt-[50px] space-y-[80px] pb-[80px] laptop:mt-[60px] laptop:space-y-[150px] laptop:pb-[150px] desktop:mt-[80px] desktop:space-y-[200px] desktop:pb-[200px]">
        {children}
      </div>
    </main>
  );
}

export default StudentLifeTemplate;
