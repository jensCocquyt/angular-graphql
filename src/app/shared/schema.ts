import gql from 'graphql-tag';

export const listRooms = gql`
  query ListRooms {
    listRooms {
      id
      name
    }
  }
`;

export const listGuests = gql`
  query ListGuests {
    listGuests {
      id
      name
    }
  }
`;

export const searchRooms = gql`
  query searchRooms($available: Boolean, $wifi: Boolean) {
    searchRooms(available: $available, wifi: $wifi) {
      id
      name
      status
      hasWifi
    }
  }
`;

export const listReservations = gql`
  query ListReservations {
    listReservations {
      id
      guest {
        id
        name
      }
      room {
        id
        name
        number
      }
      checkinDate
      checkoutDate
    }
  }
`;

export const addReservation = gql`
  mutation AddReservation($reservation: AddReservationInputType!) {
    addReservation(reservation: $reservation) {
      id
      guest {
        id
        name
      }
      room {
        id
        name
        number
      }
      checkinDate
      checkoutDate
    }
  }
`;

export const removeReservation = gql`
  mutation RemoveReservation($id: Int) {
    removeReservation(id: $id) {
      id
    }
  }
`;
