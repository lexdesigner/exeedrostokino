import React from "react"

export default function Footer(){
    return (
    <div className="p-2 bg-black text-center text-white text-xs leading-snug">
        <a href="#" className="underline">Дисклеймер</a><br/>
        <a href="#" className="underline">Политика конфиденциальности</a><br/>
        <p className="my-2 text-gray-500">Не является публичной офертой. Подробности узнавайте в отделе продаж Chery Ростокино.</p>
        <p className="text-center mt-2">Chery Ростокино &copy; 2020</p>
    </div>
    )
}