import { useRef, ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onCloseRequested: () => void;
    headerLabel: string;
    children?: ReactNode;
}

function Modal(props: ModalProps) {
    const innerDivRef = useRef<HTMLDivElement | null>(null);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (innerDivRef.current && innerDivRef.current.contains(event.target as Node)) {
            return;
        }
        props.onCloseRequested();
    };

    return (
        props.isOpen ?
            <div onClick={handleOverlayClick} className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
                <div ref={innerDivRef} className="bg-white p-6 rounded shadow-lg">
                    <div className="flex justify-between items-center pb-2">
                        <h1 className="text-lg">{props.headerLabel}</h1>
                        <button 
                            aria-label="Close"
                            className="p-2"
                            onClick={props.onCloseRequested}
                        >X</button>
                    </div>
                    {props.children}
                </div>
            </div>
            :
            null
        
    )
}

export default Modal;