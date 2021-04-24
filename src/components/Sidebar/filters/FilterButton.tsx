import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Clear from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//     fontFamily: "Vazir",
//     padding: "4px 10px",
//     borderRadius: "50px"
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#a12727",
    height: 24,
    // '& > *': {
    //   margin: theme.spacing(0.5),
    // },
  },
  label: {
    fontFamily: "Vazir",
  }
}));

const FilterButton = ({ filterText } : { filterText: string }) => {

  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Chip
      classes={{ root: classes.root, label: classes.label }}
      deleteIcon={<Clear />}
      label={filterText}
      onDelete={handleDelete}
      color="secondary"
    />
  )
}

export default FilterButton;