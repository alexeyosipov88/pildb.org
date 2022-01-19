package sql_makers.text_english.java_sql_maker;

import java.io.File; // Import the File class
import java.io.FileNotFoundException; // Import this class to handle errors
import java.util.Scanner; // Import the Scanner class to read text files
import java.io.IOException; // Import the IOException class to handle errors
import java.io.FileWriter; // Import the FileWriter class

public class ReadText {
  public static void main(String[] args) {
    for (int i = 1; i <= 79; i++) {
      try {
        String pathOfNewFile = "database/text_english/java_sql_maker/sql-files/%s.sql";
        pathOfNewFile = String.format(pathOfNewFile, i);
        File newFile = new File(pathOfNewFile);
        if(newFile.createNewFile()) {
          String data = readFile(i);
          write(i, data, newFile);
        } else {
          System.out.println("File was not created!");
        }
      } catch(IOException err) {
        System.out.println("Some error occurred");
        err.fillInStackTrace();
      }
    }
  }

  public static void write(int i, String fullText, File newfile) {
    try {
      FileWriter writeToFile = new FileWriter(newfile);
      writeToFile.write(makeSqlFile(i, fullText));
      writeToFile.close();
      System.out.println("Successfully wrote to the file.");
    } catch (IOException err) {
      System.out.println("An error occurred!");
      err.printStackTrace();
    }
  }

  public static String readFile(int i) {
    try {
      String path = "database/text_english/java_sql_maker/files-to-read/%s.txt";
      path = String.format(path, i);
      File fileToRead = new File(path);
      Scanner readFile = new Scanner(fileToRead);
      String fullText = "";
      while (readFile.hasNextLine()) {
        fullText = fullText + readFile.nextLine() + "\n";
      }
      readFile.close();
      fullText = fullText.replaceAll("'", "''");
      fullText = fullText.replaceAll("\n{2,}", "\n");
      return fullText;
    } catch (FileNotFoundException err) {
      System.out.println("File not found!");
      err.printStackTrace();
    }
    return null;
  }

  public static String makeSqlFile(int id, String text) {
    String columnNames = "INSERT INTO english_text (treaty_id, text)\n";
    String values = String.format("VALUES(%s, '%s')", id, text);
    return columnNames + values;

  }
}
