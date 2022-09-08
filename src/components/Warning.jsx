function Warning({isBeingEdited}) {
    return (
        <div>
            <p className={isBeingEdited ? "warning edit" : "warning"}>*Comment must be at least 10 characters.</p>
        </div>
    )
}

export default Warning
