import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    color: 'black',

    pageContainer: {
      margin: 20,
      border: '1px solid black',
      padding: 20,

      mainHeadingContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,

        mainHeading: {
          fontSize: 30,
          color: 'red',
          marginBottom: 20,
        },

        formFieldWrapper: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        },
      },

      formContainer: {
        marginBottom: 20,

        formIcon: {
          width: 30,
          height: 30,
          marginRight: 10,
        },

        formField: {
          fontSize: 20,
        },
      },

      mainImage: {
        width: '50%',
        height: 200,
        margin: 'auto',
        marginBottom: 20,
      },

      detailContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        width: '100%',

        detailHeading: {
          fontSize: 20,
          color: '#666',
          width: '50%',
          textAlign: 'center',
        },

        generalComments: {
          color: '#666',
        },
      },
    },
  },
  viewer: {
    width: '100%', //the pdf viewer will take up all of the width and height
    height: '100vh',
  },
});

export default styles;
