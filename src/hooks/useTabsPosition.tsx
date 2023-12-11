import { Children, isValidElement, useEffect, useRef, useState } from 'react';

export const useTabsPosition = (children: React.ReactNode, selected?: string) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabWidth, setTabWidth] = useState(0);
  const [tabLeft, setTabLeft] = useState(0);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    // set tab position
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLButtonElement;
      setTabLeft(currentTab?.offsetLeft ?? 0);
      setTabWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [activeTabIndex]);

  useEffect(() => {
    // default to first tab
    if (selected) {
      const initialIndex = Children.toArray(children).findIndex(child => {
        if (isValidElement(child)) {
          return child.props.value === selected;
        }
        return false;
      });

      if (initialIndex !== -1) {
        setActiveTabIndex(initialIndex);
      }
    }
  }, [selected, children, setActiveTabIndex]);

  return { tabsRef, activeTabIndex, setActiveTabIndex, tabWidth, tabLeft };
};
