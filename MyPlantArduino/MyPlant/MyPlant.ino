/*
 * MyPlant initial arduino program for reading Humidity sensor through a serial line and
 * then sending it to a RPI which will take in charge of the data and displays it in an UI
 * 
 * Data read : Analog input from Temperature sensor : Analog inputs = A0-8
 * Data to be sent : converted values to be sent trough : TBD
 */

void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

void loop() {
  // read the input on analog pin 0:
  SendData(A0);
  // read the input on analog pin 1:
  SendData(A1);
  // read the input on analog pin 2:
  SendData(A2);
  // read the input on analog pin 3:
  SendData(A3);
  // read the input on analog pin 4:
  SendData(A4);
  // read the input on analog pin 5:
  SendData(A5);
  // read the input on analog pin 6:
  SendData(A6);
  // read the input on analog pin 7:
  SendData(A7);
  // Wait 1 s
  delay(1000);
}

void SendData(int pin)
{
  int sensorValue = analogRead(pin);
  // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):
  float voltage = sensorValue * (5.0 / 1023.0);
  // Convert value into percentage:
  int Waterpercentage = (int)((float)((float)voltage / (float)3.0) * 100);
  // send out the value through serial:
  Serial.println(Waterpercentage);
}
