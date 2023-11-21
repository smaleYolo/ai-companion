import React from "react";

const AuthLayout = ({
    children
}:{children: React.ReactNode}) => {
    return (
        <div className='flex items-center justify-center h-full'>
            <div>Ai-CompaniON APP</div>
            {children}
        </div>
    );
};

export default AuthLayout;