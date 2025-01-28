import React from 'react'

const GradientText = ({ children, className, small }) => {
    return (
        <>
            <div className={`gradient-text !leading-[120%] ${small ? "text-2xl md:text-3xl lg:text-[48px]" : "md:text-[62px]"} font-semibold ${className}`}>
                {children}
            </div>
        </>
    )
}

export default GradientText