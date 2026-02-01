import { useLocation } from "react-router-dom";
import BotAvatar from "./BotAvatar";
import BotPanel from "./BotPanel";
import { getBotScript } from "./getBotScript";
import { useState } from "react";

export default function GlobalBot({ anchor }) {

    const location = useLocation();
    const [open, setOpen] = useState(false);

    const isHome = location.pathname === "/";


    const script = getBotScript(location.pathname);

    return (
        <>
            <BotAvatar
                script={script}
                anchor={isHome ? anchor : null}
                onToggle={() => setOpen(o => !o)}
            />



            {open && <BotPanel onClose={() => setOpen(false)} />}
        </>
    );
}
