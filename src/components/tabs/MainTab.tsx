import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { TabState } from '../states/resultTabState';
import styles from "../../components/tabs/MainTab.module.css"

interface TabItem {
  id: any;
  name: string;
  content: React.ReactNode;
}

interface MainTabProps {
  tabItems: TabItem[];
  onTabClick: (tabId: string) => void; // Callback to notify parent of tab clicks
}

export const MainTab = ({ tabItems, onTabClick }: MainTabProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabItems[0].id);
  const [resulttabState, setResultTabState] = useRecoilState(TabState);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setResultTabState(tabId)
    // Notify the parent component of the tab click
    onTabClick(tabId);
    console.log(tabId)
  };

  return (
    <>
      {tabItems.length > 0 && (
        <>  
          <nav>
            <div className={`${styles.navTabs} nav nav-tabs`}  id="nav-tab" role="tablist">
              {tabItems.map((tab) => (
                <button
                  key={tab.id}
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  id={tab.id}
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id ? "true" : "false"}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            {tabItems.map((tab) => (
              <div
                key={tab.id}
                className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""}`}
                id={tab.id}
                role="tabpanel"
                aria-labelledby={tab.id}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
