import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Box, Grid, InputAdornment, TextField } from "@material-ui/core";
import { Close, Search } from "@material-ui/icons";
import { allCities, allCitiesCleaned } from "../Sidebar/dataStructured";
import CitySelectionButton from "../CitySelection/CitySelectionButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      overflow: "scroll",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2),
      width: "52%",
      margin: "1rem auto",
      borderRadius: "4px",
      outline: "none"
    },
    searchInput: {
      width: "100%",
      fontFamily: "Vazir",
      marginBottom: "40px",
    },
  })
);

interface PropsType {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CitySelectionModal = ({ modalOpen, setModalOpen }: PropsType) => {

  const [textFieldValue, setTextFieldValue] = useState("")

  const classes = useStyles();

  const textFieldValueHandle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTextFieldValue(e.target.value)
  }

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleCitySelection = (cityUrl: string) => {
    localStorage.setItem("city", cityUrl);
  };

  return (
    <Modal
      className={classes.modal}
      open={modalOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className={classes.paper}>
        <Box display="flex" justifyContent="space-between" mb="60px">
          <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            انتخاب شهر
          </span>
          <Close
            style={{ cursor: "pointer" }}
            onClick={() => setModalOpen(false)}
          />
        </Box>

        <TextField
          value={textFieldValue}
          onChange={textFieldValueHandle}
          className={classes.searchInput}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

        {!textFieldValue &&
        <>
          <h3>شهرهای پر بازدید</h3>
          <Grid container spacing={3}>
            {allCitiesCleaned.topCities.map(({ title, url }) => {
              if (title.includes(textFieldValue) || url.includes(textFieldValue)) {
                return (
                  <Grid key={url} item onClick={() => handleCitySelection(url)}>
                    <CitySelectionButton
                      to={`/${url}`}
                      onClick={handleClose}
                      text={title}
                    />
                  </Grid>
                )
              }
              return undefined  
            }
            )}
          </Grid>
        </>
        }

        {!textFieldValue && <h3>همه شهرها</h3>}
          <Grid container spacing={3}>
            {allCities.compressedData.map(
              ([id, cityName, cityUrl]: (number | string | any)[]) => {
                if (cityName.includes(textFieldValue) || cityUrl.includes(textFieldValue)) {
                  return (
                    <Grid key={id} item>
                      <CitySelectionButton
                        text={cityName}
                        to={`/${cityUrl}`}
                        onClick={handleClose}
                      />
                    </Grid>
                  )  
                }
                return undefined
              }
            )}
          </Grid>
      </div>
    </Modal>
  );
};

export default CitySelectionModal;
