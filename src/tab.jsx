import React, { useState } from "react";
import Konten from "./konten";
import { Component } from "lucide-react";
import Profil from "./profil";
import Berita from "./berita";

const tab = [
    {
        id: "PageProfilAnda",
        label: "Profil Anda",
        Component: <Profil />
    },
        {
        id: "PageUnggahTempat",
        label: "Unggah Tempat",
        Component: <Konten />
    },
        {
        id: "PageUnggahBerita",
        label: "Unggah Berita",
        Component: <Berita />
    }
]
const Tabs = () => {


    const [activeTab, setActiveTab] = useState("PageProfilAnda");


    return (
        <div className = " mt-[5.1cm] bg-putihBagus rounded-lg mb-[300px] inline">
                <div className="flex justify-center border-b shadow-lg">
                    {tab.map((tab)=> (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={` px-14 py-2 rounded-lg mr-2 mb-2 ${activeTab === tab.id ? " text-greentea text-[25px] font-bold" : "bg-putihBagus text-opacityHijau60 text-[25px] font-bold"}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div>   
                          {tab.find((tab) => tab.id === activeTab)?.Component}
                </div>
        </div>
    );
}
export default Tabs;