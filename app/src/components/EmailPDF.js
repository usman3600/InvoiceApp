import React, { useState, useEffect} from 'react'
import {Button} from "@mui/material"
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10,
    fontFamily: 'Arial',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    backgroundColor: 'black',
    color: '#00dddd',
    fontSize: 20,
    padding: 10,
    marginBottom: 10,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: '30%',
    marginBottom: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  totalLabel: {
    marginRight: 10,
    fontWeight: 'bold',
  },
});

const Invoice = ({ total, items }) => {
  return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>Invoice App</Text>
            <View style={styles.flexContainer}>
              <Text>Invoice Id</Text>
              <Text>Invoice-434434</Text>
            </View>
            <View style={styles.flexContainer}>
              <Text>Client</Text>
              <Text>usmanfaki</Text>
            </View>
            <View style={styles.flexContainer}>
              <Text>Email</Text>
              <Text>Usmanfaki720@gmail.com</Text>
            </View>
            <View style={styles.flexContainer}>
              <Text>Mobile Number</Text>
              <Text>07014343345</Text>
            </View>
            <View style={styles.flexContainer}>
              <Text style={{ width: '30%' }}>Item</Text>
              <Text style={{ width: '30%' }}>Rate</Text>
              <Text style={{ width: '30%' }}>Hours</Text>
            </View>
            {items.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.rate}</Text>
                <Text style={styles.item}>{item.hours}</Text>
              </View>
            ))}
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text>{total}</Text>
            </View>
          </View>
        </Page>
      </Document>
    );
};

const GenerateEmailPDF = ({ total, items }) => {
  const [pdfBlob, setPdfBlob] = useState(null);

  // Function to generate PDF blob
  useEffect(() => {
    const generatePdfBlob = async () => {
      const blob = await <PDFViewer document={<Invoice total={total} items={items} />} />;
      setPdfBlob(blob);
    };

    generatePdfBlob();
  }, [total, items]);

  // Function to post PDF blob to server
  const postPdfToServer = async () => {
    try {
      const formData = new FormData();
      formData.append('invoice', pdfBlob, 'invoice.pdf');
      const response = await fetch('your-server-url', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        console.log('Invoice posted successfully');
      } else {
        console.error('Failed to post invoice to server');
      }
    } catch (error) {
      console.error('Error posting invoice to server:', error);
    }
  };

  // Render
  return (
    <div>
      {/* Render the PDF here using <PDFViewer> if needed */}
      <PDFViewer document={<Invoice total={total} items={items} />}/>
      {pdfBlob && <Button onClick={postPdfToServer}>Post to Server</Button>}
    </div>
  );
};

export default GenerateEmailPDF;
