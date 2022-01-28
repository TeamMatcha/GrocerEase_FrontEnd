import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import '../groceryCard.css'
import { Card, CardMedia, CardActions, Button, CardContent, Typography, } from '@mui/material';
import pattern from '../pattern_hexagon.png';


export const GroceryCard = ({ name, date_created, tags, listId, onDelete }) => {
    const navigate = useNavigate()


    return (
        <Card style={{ marginBottom: "15px" }}>
            <CardMedia image={pattern} height="10" component="img" style={{ height: "100px" }} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>


                <Typography variant="body2" color="text.secondary">
                    <i style={{marginRight: '5px'}} class="fa fa-calendar" aria-hidden="true"></i>
                    {moment(date_created).format('MMMM Do YYYY')}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small" onClick={() => { navigate(`/create_list_detail?id=${listId}`) }}>Details</Button>
                <Button size="small" onClick={(event) => {
                    event.preventDefault()
                    onDelete(listId)
                }}>Delete</Button>

            </CardActions>

            {/* <div onClick={() => { navigate(`/create_list_detail?id=${listId}`) }}>
                <h2> {name}</h2>
                <p>{moment(date_created).format('MMMM Do YYYY, h:mm:ss a')} </p>
            </div>
            <i className='fas fa-times-circle fa' onClick={(event) => {
                event.preventDefault()
                onDelete(listId)
            }}>
            </i> */}
        </Card>
    )
}


