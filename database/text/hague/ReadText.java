package database.text.hague;

import java.io.File; // Import the File class
import java.io.FileNotFoundException; // Import this class to handle errors
import java.util.Scanner; // Import the Scanner class to read text files
import java.io.IOException; // Import the IOException class to handle errors
import java.io.FileWriter; // Import the FileWriter class

class ReadText {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      try {
        String pathOfNewFile = "text/hague/%s.txt";
        pathOfNewFile = String.format(pathOfNewFile, i);
        File newFile = new File(pathOfNewFile);
        if (newFile.createNewFile()) {
          System.out.println("New file created on path " + pathOfNewFile);
          try {
            String path = "text-reader/%s.txt";
            path = String.format(path, i);
            File fileToRead = new File(path);
            Scanner readFile = new Scanner(fileToRead);
            String fullText = "";
            while (readFile.hasNextLine()) {
              fullText = fullText + readFile.nextLine() + "\n";
            }
            try {
              FileWriter writeToFile = new FileWriter(newFile);
              writeToFile.write(fullText);
              writeToFile.close();
              System.out.println("Successfully wrote to the file.");
            } catch (IOException err) {
              System.out.println("An error occurred!");
              err.printStackTrace();
            }
            readFile.close();
          } catch (FileNotFoundException err) {
            System.out.println("File not found!");
            err.printStackTrace();
          }
        } else {
          System.out.println("This file already exists!");
        }
      } catch (IOException err) {
        System.out.println("Some error occured!");
        err.printStackTrace();
      }
    }
  }
}