import {Button} from "@material-ui/core";
import React from "react";

const StaffToolBar = () => {
    return (
        <>
            <Button variant='contained' color='primary'>Добавить</Button>
            <Button variant='contained' color-='primary'>Удалить</Button>
        </>
    );
}

export default StaffToolBar;