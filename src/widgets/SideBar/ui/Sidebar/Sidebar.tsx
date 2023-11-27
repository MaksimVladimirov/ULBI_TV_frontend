import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { className } = props;

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div>
        <ThemeSwitcher className={cls.switchers} />
        {/* TODO: LangSwitcher */}
      </div>
    </div>
  );
};
