# GlycanSearch

The Glycan Search software is specifically designed to conduct searches of the query WURCS string within the Target WURCS string. Upon successful identification, the software will return a value of TRUE; conversely, if unsuccessful, it will return a value of FALSE.

"WURCS" stands for Web3.0 Unique Representation of Carbohydrate Structure

## Requirement
* Java 8 (or later)
* maven 3.6 (or later)

## Compile
Clone this repository in the local repository.
```
$ git clone https://gitlab.com/glycoinfo/glycan-search.git
```

Move to the cloned local repository and compile the source files
```
$ cd ~/Directory_of_local_repository/glycan-search
$ mvn clean compile
```

If a certificate error such as "PKIX path validation failed" occurred during the compilation process, please you try again with the below command.
```
$ mvn clean compile -X -Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true -Dmaven.wagon.http.ssl.ignore.validity.dates=true
```

## JAR file
Runable JAR (Java Archive) file is generate the below command.
```
$ mvn clean -P make-fat-jar package
```

When compilation in finished, jar file is created in the target folder.
>[INFO] Building jar: /../../Directory_of_local_repository/glycan-search/target/glycansearch-jar-with-dependencies.jar

- Windows or Linux
```
java -jar glycansearch-jar-with-dependencies.jar
```
- Mac OS X
```
java -XstartOnFirstThread -jar glycansearch-jar-with-dependencies.jar
```
## Example

### Test Case

| Case | Query | Target | Result |
| ------ | -----------------| --------------- | ----- |
| 1 | ![Image](https://imgur.com/w68H7qY.png) | ![Image](https://imgur.com/IV8Hme6.png) | True |
| 2 | ![Image](https://imgur.com/w68H7qY.png) | ![Image](https://imgur.com/1bgQWks.png) | True |
| 3 | ![Image](https://imgur.com/w68H7qY.png) | ![Image](https://imgur.com/Jfk7WZd.png) | True |
| 4 | ![Image](https://imgur.com/w68H7qY.png) | ![Image](https://imgur.com/emvRkFM.png) | True |
| 5 | ![Image](https://imgur.com/w68H7qY.png) | ![Image](https://imgur.com/ij6ea1z.png) | True |
| 6 | ![Image](https://imgur.com/w68H7qY.png) | ![Image](https://imgur.com/MOqMR1S.png) | True |
| 7 | ![Image](https://imgur.com/w68H7qY.png) | ![Image](https://imgur.com/4wBzVgc.png) | False |
| 8 | ![Image](https://imgur.com/w68H7qY.png) | ![Image](https://imgur.com/ni7Y0CQ.png) | False |
| 9 | ![Image](https://imgur.com/w68H7qY.png) | ![Image](https://imgur.com/w1nH8bJ.png) | False |


```java

public class GlycanSearch {
	
	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		StringBuilder resultString = new StringBuilder();
        //Case 1
		String query1 = "WURCS=2.0/3,5,4/[a2122h-1b_1-5_2*NCC/3=O][a1122h-1b_1-5][a1122h-1a_1-5]/1-1-2-3-3/a4-b1_b4-c1_c3-d1_c6-e1";
		String target1  = "WURCS=2.0/4,11,10/[a2122h-1a_1-5_2*NCC/3=O][a2122h-1b_1-5_2*NCC/3=O][a1122h-1b_1-5][a1122h-1a_1-5]/1-2-3-4-4-4-4-4-4-4-4/a4-b1_b4-c1_c3-d1_c6-g1_d2-e1_e2-f1_g3-h1_g6-j1_h2-i1_j2-k1";		
		validateInputWurcs(target1, query1);
		System.out.println("Case 1: " + isQueryPresent(convertWURCSSearchable(target1), convertWURCSSearchable(query1)));
		resultString.append("Case 1: " + "\t" + isQueryPresent(convertWURCSSearchable(target1), convertWURCSSearchable(query1))+ "\n");
	
        //Case 2
		String query2 = "WURCS=2.0/3,5,4/[a2122h-1b_1-5_2*NCC/3=O][a1122h-1b_1-5][a1122h-1a_1-5]/1-1-2-3-3/a4-b1_b4-c1_c3-d1_c6-e1";
		String target2  = "WURCS=2.0/3,6,5/[Aad21122h-2x_2-6_5*NCC/3=O][a2122h-1x_1-5_2*NCC/3=O][a1122h-1x_1-5]/1-2-2-3-3-3/a?-b1_b?-c1_c?-d1_d?-e1_d?-f1";		
		validateInputWurcs(target2, query2);
		System.out.println("Case 2: " + isQueryPresent(convertWURCSSearchable(target2), convertWURCSSearchable(query2)));
		resultString.append("Case 2: " + "\t" + isQueryPresent(convertWURCSSearchable(target2), convertWURCSSearchable(query2))+ "\n");
		
        //Case 3
		String query3 = "WURCS=2.0/3,5,4/[a2122h-1b_1-5_2*NCC/3=O][a1122h-1b_1-5][a1122h-1a_1-5]/1-1-2-3-3/a4-b1_b4-c1_c3-d1_c6-e1";
		String target3  = "WURCS=2.0/3,7,6/[Aad21122h-2x_2-6_5*NCC/3=O][a2122h-1x_1-5_2*NCC/3=O][a1122h-1x_1-5]/1-2-2-3-3-3-3/a?-b1_b?-c1_c?-d1_d?-e1_d?-g1_e?-f1";
		validateInputWurcs(target3, query3);
		System.out.println("Case 3: " + isQueryPresent(convertWURCSSearchable(target3), convertWURCSSearchable(query3)));
		resultString.append("Case 3: " + "\t" + isQueryPresent(convertWURCSSearchable(target3), convertWURCSSearchable(query3))+ "\n");
		
        //Case 4
		String query4 = "WURCS=2.0/3,5,4/[a2122h-1b_1-5_2*NCC/3=O][a1122h-1b_1-5][a1122h-1a_1-5]/1-1-2-3-3/a4-b1_b4-c1_c3-d1_c6-e1";
		String target4  = "WURCS=2.0/3,8,7/[Aad21122h-2x_2-6_5*NCC/3=O][a2122h-1x_1-5_2*NCC/3=O][a1122h-1x_1-5]/1-2-2-3-3-3-3-3/a?-b1_b?-c1_c?-d1_d?-e1_d?-g1_e?-f1_g?-h1";
		validateInputWurcs(target4, query4);
		System.out.println("Case 4: " + isQueryPresent(convertWURCSSearchable(target4), convertWURCSSearchable(query4)));
		resultString.append("Case 4: " + "\t" + isQueryPresent(convertWURCSSearchable(target4), convertWURCSSearchable(query4))+ "\n");

        //Case 5
		String query5 = "WURCS=2.0/3,5,4/[a2122h-1b_1-5_2*NCC/3=O][a1122h-1b_1-5][a1122h-1a_1-5]/1-1-2-3-3/a4-b1_b4-c1_c3-d1_c6-e1";
		String target5  = "WURCS=2.0/4,9,8/[Aad21122h-2x_2-6_5*NCC/3=O][a2122h-1x_1-5_2*NCC/3=O][a1122h-1x_1-5][a2112h-1x_1-5]/1-2-2-3-3-3-4-3-3/a?-b1_b?-c1_c?-d1_d?-e1_d?-h1_e?-f1_e?-g1_h?-i1";
		validateInputWurcs(target5, query5);
		System.out.println("Case 5: " + isQueryPresent(convertWURCSSearchable(target5), convertWURCSSearchable(query5)));
		resultString.append("Case 5: " + "\t" + isQueryPresent(convertWURCSSearchable(target5), convertWURCSSearchable(query5))+ "\n");
		
        //Case 6
		String query6 = "WURCS=2.0/3,5,4/[a2122h-1b_1-5_2*NCC/3=O][a1122h-1b_1-5][a1122h-1a_1-5]/1-1-2-3-3/a4-b1_b4-c1_c3-d1_c6-e1";
		String target6  = "WURCS=2.0/5,10,9/[Aad21122h-2x_2-6_5*NCC/3=O][a2122h-1x_1-5_2*NCC/3=O][a1122h-1x_1-5][a2122h-1x_1-5][a2112h-1x_1-5]/1-2-2-3-3-4-3-3-3-5/a?-b1_b?-c1_c?-d1_d?-e1_d?-h1_e?-f1_e?-g1_h?-i1_h?-j1";
		validateInputWurcs(target6, query6);
		System.out.println("Case 6: " + isQueryPresent(convertWURCSSearchable(target6), convertWURCSSearchable(query6)));
		resultString.append("Case 6: " + "\t" + isQueryPresent(convertWURCSSearchable(target6), convertWURCSSearchable(query6))+ "\n");
		
        //Case 7
		String query7 = "WURCS=2.0/3,5,4/[a2122h-1b_1-5_2*NCC/3=O][a1122h-1b_1-5][a1122h-1a_1-5]/1-1-2-3-3/a4-b1_b4-c1_c3-d1_c6-e1";
		String target7  = "WURCS=2.0/7,12,11/[Aad21122h-2x_2-6_5*NCC/3=O][a2122h-1x_1-5_2*NCC/3=O][a1122h-1x_1-5][a2122h-1x_1-5][a2112h-1x_1-5][a1221m-1x_1-5][a2112h-1x_1-5_2*NCC/3=O]/1-2-2-3-3-4-3-3-3-5-6-7/a?-b1_b?-c1_c?-d1_c?-l1_d?-e1_d?-h1_d?-k1_e?-f1_e?-g1_h?-i1_h?-j1";
		validateInputWurcs(target7, query7);
		System.out.println("Case 7: " + isQueryPresent(convertWURCSSearchable(target7), convertWURCSSearchable(query7)));
		resultString.append("Case 7: " + "\t" + isQueryPresent(convertWURCSSearchable(target7), convertWURCSSearchable(query7))+ "\n");

        //Case 8
		String query8 = "WURCS=2.0/3,5,4/[a2122h-1b_1-5_2*NCC/3=O][a1122h-1b_1-5][a1122h-1a_1-5]/1-1-2-3-3/a4-b1_b4-c1_c3-d1_c6-e1";
		String target8  = "WURCS=2.0/3,5,4/[a2112h-1x_1-5_2*NCC/3=O][a2122h-1x_1-5_2*NCC/3=O][a1122h-1x_1-5]/1-2-3-3-3/a?-b1_b?-c1_c?-d1_c?-e1";
		validateInputWurcs(target8, query8);
		System.out.println("Case 8: " + isQueryPresent(convertWURCSSearchable(target8), convertWURCSSearchable(query8)));
		resultString.append("Case 8: " + "\t" + isQueryPresent(convertWURCSSearchable(target8), convertWURCSSearchable(query8))+ "\n");
		
        //Case 9
		String query9 = "WURCS=2.0/3,5,4/[a2122h-1b_1-5_2*NCC/3=O][a1122h-1b_1-5][a1122h-1a_1-5]/1-1-2-3-3/a4-b1_b4-c1_c3-d1_c6-e1";
		String target9  = "WURCS=2.0/4,5,4/[a2112h-1x_1-5_2*NCC/3=O][a2122h-1x_1-5_2*NCC/3=O][a1122h-1x_1-5][a1221m-1x_1-5]/1-2-3-4-3/a?-b1_b?-c1_c?-d1_c?-e1";
		validateInputWurcs(target9, query9);
		System.out.println("Case 9: " + isQueryPresent(convertWURCSSearchable(target9), convertWURCSSearchable(query9)));
		resultString.append("Case 9: " + "\t" + isQueryPresent(convertWURCSSearchable(target9), convertWURCSSearchable(query9))+ "\n");
		
		File savefile = new File("./GlycanSearch_Result.txt");
		
		try{
			savefile.createNewFile();
		}catch(IOException e){
		    System.out.println(e);
		}
		
		if(savefile.isFile()) {
			FileWriter filewriter = new FileWriter(savefile);
			filewriter.write( resultString.toString());
			filewriter.close();
		}
		System.out.println("Fin...");
	
	}
```

### Result
The results are displayed in the GlycanSearch_Result.txt file, located in the same directory as the JAR file.

|  | |
| ------ | ----- |
| Case 1 | True |
| Case 2 | True |
| Case 3 | True |
| Case 4 | True |
| Case 5 | True |
| Case 6 | True |
| Case 7 | False |
| Case 8 | False |
| Case 9 | False |

### Import WURCS string

![Imgur](https://i.imgur.com/6RcNetX.png)
1. Click **Add structure from string** (Red marked).
2. Paste WURCS string into the text area, and select **WURCS2** in the **input sequence format** (Red marked).
3. When click **import** button, represent glycan image on the canvas.

### Export WURCS string

![Import](https://i.imgur.com/6eQ1qkb.png)
1. Drag and select a glycan image on the canvas.
2. Click **Get string from structure** (Red marked).
3. Select **WURCS2** in the **String encoded**.
4. WURCS2 string is output.

### Export images

![Image](https://i.imgur.com/XXmnrdg.png)
1. Drag and select a glycan image on the canvas.
2. Click **Export to graphical formats** on the **File** tab and select the image format.
3. Select a directory to save the image.
