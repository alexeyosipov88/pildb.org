package sql_makers.organizations;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

class TreatiesByOrgSqlMaker {
  private static File fileMaker(String path) {
    File newFile = new File(path);
    try {
      if (newFile.createNewFile()) {
        System.out.println("Sql file was created!");
      } else {
        System.out.println("File already exists!");
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
    return newFile;
  }

  private static void writeSql(File newFile, String text) {
    try {
      FileWriter writeFile = new FileWriter(newFile);
      writeFile.write(text);
      writeFile.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  // Hague Conference on Private International Law
  // United Nations
  // International Institute for the Unification of Private Law (UNIDROIT)
  // International Civil Aviation Organization
  // World Intellectual Property Organization

  private static String sqlContent() {
    String result = "INSERT INTO treaties_by_organization (treaty_id, organization_id)\nValues ";
    int organizationId = 1;
    for (int i = 1; i <= 117; i++) {
      String value = "(%d, %d),\n";
      if (i > 39)
        organizationId = 2;
      if (i > 65)
        organizationId = 3;
      if (i > 79)
        organizationId = 4;
      if (i > 93)
        organizationId = 5;
      if(i == 117) {
        value = "(%d, %d);";
      }
      value = String.format(value, i, organizationId);
      result = result + value;
    }
    return result;
  }
  public static void main(String[] args) {
    File newFile = fileMaker("database/organizations/sql-files/organizations.sql");
    writeSql(newFile, sqlContent());
  }

}