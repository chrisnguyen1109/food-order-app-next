const TextError = ({ children }) => {
    return (
        <p style={{ flex: '0 0 100%', color: 'red', margin: '10px 0' }}>
            {children}
        </p>
    );
};

export default TextError;
