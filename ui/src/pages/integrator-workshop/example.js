import React, {Component} from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import Box from "@material-ui/core/Box";
import {createMuiTheme, MuiThemeProvider, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {ThemeProvider} from '@material-ui/styles';
import './styles.css';

const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            h5: {
                fontSize: '16px'
            },
            body1: {
                fontSize: '12px'
            },
            body2: {
                fontSize: '10px'
            }
        }
    }
})

export const products = [
    {
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20
    },
    {
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 1.8,
        memory: 20
    },
    {
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20
    },
    {
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20
    },
    {
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20
    },
    {
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20
    },
    {
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20
    },
    {
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20
    },
    {
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20
    },
    {
        name: 'Цифровая обработка звука',
        tariff: 'бессрочно',
        price: 100000,
        price2: 100,
        avatarSrc: 'https://thefinanser.com/wp-content/uploads/2019/10/Product.png',
        description: 'Данный продукт представляет собой библиотеку для обработки звуковых файлов.',
        RAM: 2.7,
        cores: 2,
        performance: 2,
        memory: 20
    },
]

// fake data generator
const getItems = (count, offset = 0) => {
    return Array.from({length: count}, (v, k) => k).map(k => ({
        id: `item-${k + offset}`,
        content: <MuiThemeProvider theme={theme}><Paper>
            <Box display={'flex'} p={1}>
                <Box mx={1}>
                    <img src={products[k].avatarSrc} alt={'Product image'} className={'card'}/>
                </Box>
                <Box textOverflow={'ellipsis'} mr={1}>
                    <Typography variant={"h5"}>
                        {products[k].name}
                    </Typography>
                    <Typography variant={"body2"}>
                        {products[k].description}
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} >
                    <Box>
                        <Typography>
                            <b>Тарификация:</b>
                        </Typography>
                        <Typography>
                            {products[k].tariff}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>
                            <b>Стоимость:</b>
                        </Typography>
                        <Typography>
                            {products[k].price}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Paper></MuiThemeProvider>
    }));
}

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    margin: `0 0 ${grid}px 0`,
    // background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 350,

});

export class Example extends Component {
    state = {
        items: getItems(10),
        selected: getItems(0, 1)
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const {source, destination} = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = {items};

            if (source.droppableId === 'droppable2') {
                state = {selected: items};
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
            this.props.callback({
                items: result.droppable,
                selected: result.droppable2
            })
        }
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Box p={1}>
                    <Box display={'flex'} justifyContent={'space-evenly'}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                            <Typography variant={"h5"}>
                                Все продукты
                            </Typography>
                            <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        style={getListStyle(snapshot.isDraggingOver)}>
                                        {this.state.items.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style
                                                        )}
                                                    >
                                                        {item.content}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                            <Typography variant={"h5"}>
                                Собираемый набор
                            </Typography>
                            <Droppable droppableId="droppable2">
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        style={getListStyle(snapshot.isDraggingOver)}>
                                        {this.state.selected.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style
                                                        )}>
                                                        {item.content}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                        </Box>
                    </Box>
                    </Box>
            </DragDropContext>
        );
    }
}
