import { useLocation } from 'react-router-dom';
import {
  Document,
  Page,
  Text,
  View,
  PDFViewer,
  Image,
} from '@react-pdf/renderer';

import styles from './styles';
import vehicleIcon from '../../assets/icons/rego-icon.png';
import tickIcon from '../../assets/icons/tick.png';
import crossIcon from '../../assets/icons/cross.png';
import NAIcon from '../../assets/icons/na.png';

const Report = () => {
  const { state } = useLocation();
  const { page, viewer } = styles;
  const { pageContainer } = page;
  const { detailContainer, mainHeadingContainer, mainImage, formContainer } =
    pageContainer;
  const { formIcon, formField } = formContainer;
  const { detailHeading, generalComments } = detailContainer;
  const { mainHeading, formFieldWrapper } = mainHeadingContainer;

  console.log(state);

  return (
    <PDFViewer style={viewer}>
      <Document>
        <Page size='A4' style={page}>
          <View style={pageContainer}>
            <View style={mainHeadingContainer}>
              <Text style={mainHeading}>Vehicle Details</Text>
              <Text style={mainHeading}>Result: PASS</Text>
            </View>

            <Image src={vehicleIcon} style={mainImage} />

            <View style={detailContainer}>
              <Text style={detailHeading}>Make</Text>
              <Text style={detailHeading}>Holden</Text>
            </View>

            <View style={detailContainer}>
              <Text style={detailHeading}>Model</Text>
              <Text style={detailHeading}>Equinox</Text>
            </View>

            <View style={detailContainer}>
              <Text style={detailHeading}>VIN</Text>
              <Text style={detailHeading}>123x456y789z</Text>
            </View>

            <View style={detailContainer}>
              <Text style={detailHeading}>Compliance Date</Text>
              <Text style={detailHeading}>04/2019</Text>
            </View>

            <View style={detailContainer}>
              <Text style={detailHeading}>Build Date</Text>
              <Text style={detailHeading}>03/2018</Text>
            </View>

            <View style={detailContainer}>
              <Text style={detailHeading}>Odometer Reading</Text>
              <Text style={detailHeading}>50</Text>
            </View>

            <View style={detailContainer}>
              <Text style={detailHeading}>Registration No.</Text>
              <Text style={detailHeading}>1PF7SD</Text>
            </View>

            <View style={detailContainer}>
              <Text style={detailHeading}>Seating Capacity</Text>
              <Text style={detailHeading}>5</Text>
            </View>

            <View style={mainHeadingContainer}>
              <Text style={mainHeading}>Customer Details</Text>
            </View>

            <View style={detailContainer}>
              <Text style={detailHeading}>Customer</Text>
              <Text style={detailHeading}>Maven Australia</Text>
            </View>
          </View>
        </Page>

        <Page size='A4' style={page}>
          <View style={pageContainer}>
            <View style={detailContainer}>
              <Text style={detailHeading}>Phone</Text>
              <Text style={detailHeading}>1800466283</Text>
            </View>

            <View style={detailContainer}>
              <Text style={detailHeading}>Email</Text>
              <Text style={detailHeading}>maven.fleet@gmail.com</Text>
            </View>

            <View style={detailContainer}>
              <Text style={detailHeading}>City</Text>
              <Text style={detailHeading}>Sydney</Text>
            </View>

            <View style={mainHeadingContainer}>
              <Text style={mainHeading}>General Comments</Text>
            </View>

            <View style={detailContainer}>
              <Text style={generalComments}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </View>
          </View>
        </Page>

        <Page size='A4' style={page}>
          <View style={pageContainer}>
            <View style={formContainer}>
              <Text style={mainHeading}>Interior</Text>

              <View style={formFieldWrapper}>
                <Image src={tickIcon} style={formIcon} />
                <Text style={formField}>Interior</Text>
              </View>

              <View style={formFieldWrapper}>
                <Image src={tickIcon} style={formIcon} />
                <Text style={formField}>Seat Belts</Text>
              </View>

              <View style={formFieldWrapper}>
                <Image src={tickIcon} style={formIcon} />
                <Text style={formField}>Window Demisters</Text>
              </View>

              <View style={formFieldWrapper}>
                <Image src={crossIcon} style={formIcon} />
                <Text style={formField}>Horn</Text>
              </View>

              <View style={formFieldWrapper}>
                <Image src={NAIcon} style={formIcon} />
                <Text style={formField}>Other</Text>
              </View>
            </View>

            <View style={formContainer}>
              <Text style={mainHeading}>Under Bonnet</Text>

              <View style={formFieldWrapper}>
                <Image src={tickIcon} style={formIcon} />
                <Text style={formField}>Bonnet catch</Text>
              </View>

              <View style={formFieldWrapper}>
                <Image src={tickIcon} style={formIcon} />
                <Text style={formField}>Fluid levels</Text>
              </View>

              <View style={formFieldWrapper}>
                <Image src={tickIcon} style={formIcon} />
                <Text style={formField}>Brake master cylinders</Text>
              </View>

              <View style={formFieldWrapper}>
                <Image src={crossIcon} style={formIcon} />
                <Text style={formField}>Hoses and Pipes</Text>
              </View>

              <View style={formFieldWrapper}>
                <Image src={NAIcon} style={formIcon} />
                <Text style={formField}>Other</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Report;
