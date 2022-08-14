function Warning({showWarning}) {
    return (
        <div>
            <p className={showWarning ? "warning" : "warning hidden"}>*Comment must be at least 10 characters but must not be longer than 300 characters.</p>
        </div>
    )
}

export default Warning
