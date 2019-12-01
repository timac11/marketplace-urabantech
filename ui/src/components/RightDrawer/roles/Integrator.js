import React from 'react';
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import numberSeparator from "../../../utils/numberSeparator";

function Integrator({content}) {
    console.log(content);
    return (
        <Box display={'flex'} flexDirection={'column'} position={'relative'} >
            {
                content.sum && <>
                    <Typography>
                        <b>Итоговые показатели собранного проекта:</b>
                    </Typography>
                    <Typography variant={"body2"}>
                        Суммарное потребление памяти:&nbsp;<b>{content.memory.toFixed(1)}&nbsp;Гб</b>
                    </Typography>
                    <Typography variant={"body2"}>
                        Требуемая мощность ядра:&nbsp;<b>{content.performance.toFixed(1)}&nbsp;Ггц</b>
                    </Typography>
                    <Typography variant={"body2"}>
                        Требуемое кол-во ядер:&nbsp;<b>{content.cores.toFixed(0)}</b>
                    </Typography>
                    <Typography variant={"body2"}>
                        Требуемое кол-во ОЗУ:&nbsp;<b>{content.RAM.toFixed(1)}&nbsp;Гб</b>
                    </Typography>
                    <br />
                    <Divider />
                    <Typography>
                        Итоговая стоимость набора:
                    </Typography>
                    <Typography variant={"h6"}>
                        <b>{numberSeparator(content.sum)}&nbsp;₽</b>
                    </Typography>
                    <Divider />
                    <br />
                    <Box justifySelf={'flex-end'} alignSelf={'center'} >
                        <Button color={"primary"} variant={"contained"}>
                            Разместить на маркетплейс
                        </Button>
                    </Box>
                </>
            }
        </Box>
    );
}

export default Integrator;
