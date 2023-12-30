import { useState } from 'react';
import { ChevronDownIcon } from "@heroicons/react/24/outline";


const data = [
    {
        id: 1,
        title: "Accordion one",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, repudiandae.",
    },
    {
        id: 2,
        title: "Accordion two",
        text: "Lorem2 ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, repudiandae.",
    },
    {
        id: 3,
        title: "Accordion three",
        text: "Lorem3 ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, repudiandae.",
    },
];


function Accordion() {
    const [open, setOpen] = useState(null);

    return (
        <div className="accordion">
            {data.map((item) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    setOpen={setOpen}
                    open={open}
                />
            ))}
        </div>
    );
}

export default Accordion;


function AccordionItem({ item, setOpen, open }) {
    const isOpen = item.id == open;

    return (
        <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""} `} >
            <div className="accordion-item__header" onClick={() => setOpen(item.id)}>
                <div>{item.title}</div>
                <ChevronDownIcon
                    style={{
                        width: "1.2rem",
                        transition: "all 0.2s ease-out",
                        rotate: isOpen ? "180deg" : "0deg",
                    }} />
            </div>
            <div className="accordion-item__content">
                {item.text}
            </div>
        </div >

    );
}