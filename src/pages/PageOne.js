import React, { useState, useEffect } from "react";
import firebase from "../utilities/firebase";

const PageOne = () => {
  const [listItem, setListItem] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);

  const getImageUrl = () => {
    const imageRef = firebase.database().ref("images").child("daily");
    imageRef.on("value", (snapshot) => {
      const imageUrls = snapshot.val();
      const urls = [];
      for (let id in imageUrls) {
        urls.push({ id, url: imageUrls[id] });
      }
      const newState = [...imageUrl, ...urls];
      setImageUrl(newState);
    });
  };

  useEffect(() => {
    const listRef = firebase.database().ref("fingerPrintId");
    listRef.on("value", (snapshot) => {
      const items = snapshot.val();
      const listItems = [];
      for (let i in items) {
        listItems.push(items[i]);
      }
      setListItem(listItems);
    });
  }, []);

  useEffect(() => {
    getImageUrl();
  }, []);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row hidden-md-up ">
            {listItem
              ? listItem.map((item) => {
                  return (
                    <div className="col-md-4 mb-5" key={item.Id}>
                      <div className="card border-dark">
                        <div className="profile-image">
                          {imageUrl
                            ? imageUrl.map(({ id, url }) => {
                                if (item.Id === id) {
                                  return (
                                    <div key={id}>
                                      <img src={url} alt="" className="image" />
                                    </div>
                                  );
                                }
                              })
                            : ""}
                        </div>
                        <div className="card-body">
                          <p className="card-text">FullName: {item.fullName}</p>
                          <p className="card-text">Age: {item.age}</p>
                          <p className="card-text">Email: {item.email}</p>
                          <p className="card-text">
                            Phone Number: {item.mobile}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageOne;
