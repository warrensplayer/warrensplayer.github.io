import * as React from "react"

type LinkProps = {
    href: string,
    children: React.ReactNode
};

const Link: React.FunctionComponent<LinkProps> = ({href, children}) =>
     <a href={href} target="_blank"
        className="p-2 bg-slate-200 rounded-md text-slate-700">
        {children}
    </a>;

export default Link;