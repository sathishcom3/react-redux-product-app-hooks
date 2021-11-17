import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  resetNewContact,
} from '../redux/contactActions';
import * as types from '../redux/actionTypes';
import { Link } from 'react-router-dom';
import ContactChild from './ContactChild';

const ContactPage = (props) => {
  const [contactName, setName] = useState({ name: '' });
  const [contactNum, setContactNum] = useState({ num: '' });
  const [isValidationErrorDisplayed, setValidationError] = useState(false);

  const contactChildRef = useRef(null);

  const triggerAction = useDispatch();
  const storeState = useSelector((state) => state);

  const contacts = storeState && storeState.contacts;

  const addIt = () => {
    if (contactNum.num !== '' && contactName.name !== '') {
      triggerAction(
        addContact({ num: contactNum.num, name: contactName.name })
      );
      setValidationError(false);
      setContactNum({ num: '' });
      setName({ name: '' });
    } else {
      setValidationError(true);
    }
  };

  const addContactNum = (e) => {
    setContactNum({ num: e.target.value });
  };

  useEffect(() => {
    return () => {
      // triggerAction(resetNewContact());
    };
  }, []);

  const deleteContactFromCom = (elment, index) => {
    // triggerAction(deleteContact(elment, index));
    triggerAction({ type: types.DELETE_CONTACT, payload: { elment, index } });
  };

  const callAlert = () => {
    console.log('ref ', contactChildRef);
    contactChildRef?.current?.showChildAlert();
  };

  return (
    <>
      <h2>Contact</h2>
      <br />
      <div>
        <input
          name="name"
          placeholder="Name*"
          value={contactName.name}
          onChange={(e) => {
            setName({ name: name + e.target.value });
          }}
        />
        <br />
        <br />
        <input
          name="num"
          placeholder="Number*"
          value={contactNum.num}
          onChange={(e) => {
            addContactNum(e);
          }}
        />
        <br />
        {isValidationErrorDisplayed && (
          <span style={{ color: 'red' }}>
            Name and Number shouldn't be empty!
          </span>
        )}
        <br />
        <br />
        <button onClick={addIt}>Add</button>
      </div>
      <br />
      <br />
      <tr>
        <td>SI.no</td>
        <td>Name</td>
        <td>Number</td>
        <td>Action</td>
      </tr>
      {contacts.newContact && contacts.newContact.length > 0 ? (
        contacts.newContact.map((element, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{element.num}</td>
              <td>{element.name}</td>
              <td>
                <span
                  style={{ color: 'blue', cursor: 'pointer' }}
                  onClick={() => deleteContactFromCom(element, index)}
                >
                  Delete
                </span>
                {/* <span style={{ color: 'green', cursor: 'pointer' }}>View</span> */}
                <Link
                  to={{
                    pathname: `/view/${element.num}`,
                    state: { from: 'Contact', element },
                  }}
                >
                  View
                </Link>
              </td>
            </tr>
          );
        })
      ) : (
        <span>No Contanct found</span>
      )}
      {/* <button onClick={callAlert}>Child func</button>
      <ContactChild ref={contactChildRef} /> */}
    </>
  );
};
export default ContactPage;
// export default withRouter(ContactPage);
