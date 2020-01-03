import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
const AnimeInfo = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [anime, setAnime] = useState({
    title: props.title,
    description: props.description,
    startDate: "",
    endDate: "",
    ageRating: "",
    status: ""
  });

  const toggle = () => setModal(!modal);

  useEffect(() => {
    axios
      .get(`https://kitsu.io/api/edge/anime/${props.id}`)
      .then(res => {
        const data = res.data.data.attributes;
        console.log(data.ratingFrequencies);
        setAnime({
          ...anime,
          startDate: data.startDate,
          endDate: data.endDate,
          ageRating: data.ageRating,
          status: data.status
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Button
        color="primary"
        onClick={toggle}
      >{`Learn more about ${props.title}`}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{anime.title}</ModalHeader>
        <ModalBody>
          <h1>Start date:{anime.startDate}</h1>
          <h1>End date:{anime.endDate}</h1>
          <h1>Age rating:{anime.ageRating}</h1>
          <h1>Status:{anime.status}</h1>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AnimeInfo;
