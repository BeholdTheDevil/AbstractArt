import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.nio.file.*;
import java.util.*;
import java.util.List;

/**
 * Created by anton on 2017-01-12.
 */
public class averageColor {

    Image[] images;
    static Color colors[] = {
            new Color(255,0,0), //red
            new Color(255,255,0), //yellow
            new Color(0,255,0), //green
            new Color(0,0,255), //blue
            new Color(130,0,255), //purple
            new Color(255, 140, 0), //orange
            new Color(255, 0, 130), //pink
            new Color(0, 255, 255), //cyan
            //new Color(128,128,128), //grey
            //new Color(0,0,0) //black
    };

    public static Path inputPath;

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Directory to sort by color: ");
        inputPath = FileSystems.getDefault().getPath(scan.next());
        List<Path> images = readDir(inputPath);
        createNewPaths(sort(createImgObjects(images)));
    }

    private static List<Image> sort(List<Image> images) {
        for(Color test : colors) {
            for(Image img : images) {
                if(Double.compare(distanceTo(img.getrgb(), test), distanceTo(img.getClosest(), img.getrgb())) < 0) {
                    img.setClosest(test);
                }
            }
        }
        return images;
    }

    private static double distanceTo(Color c1, Color c2) {
        double rmean = ( c1.getRed() + c2.getRed() )/2;
        int r = c1.getRed() - c2.getRed();
        int g = c1.getGreen() - c2.getGreen();
        int b = c1.getBlue() - c2.getBlue();
        double weightR = 2 + rmean/256;
        double weightG = 4.0;
        double weightB = 2 + (255-rmean)/256;
        return Math.sqrt(weightR*r*r + weightG*g*g + weightB*b*b);
        //return Math.sqrt(Math.pow(rgb1.getRed() - cmp.getRed(), 2) + Math.pow(rgb1.getGreen() - cmp.getGreen(), 2) + Math.pow(rgb1.getBlue() - cmp.getBlue(), 2));
    }

    public static void createNewPaths(List<Image> imgObjects) {
        int index = 1;

        for (Image img : imgObjects) {
            Path source = img.getPath();
            Path newSource;
            String color = "";
            Color cmp = img.getClosest();

            if (cmp == colors[0]) {
                color = "a_red";
            } else if (cmp == colors[1]) {
                color = "c_yellow";
            } else if (cmp == colors[2]) {
                color = "d_green";
            } else if (cmp == colors[3]) {
                color = "f_blue";
            } else if (cmp == colors[4]) {
                color = "g_purple";
            } else if (cmp == colors[5]) {
                color = "b_orange";
            } else if (cmp == colors[6]) {
                color = "h_pink";
            } else if (cmp == colors[7]) {
                color = "e_cyan";
            }

            do {
                newSource = source.resolveSibling(color + "_" + index + img.getFormat());
                index++;
            } while(Files.exists(newSource));
            try {
                Files.move(source, newSource);
                img.setPath(newSource);
            } catch(IOException e) {
                System.out.println("Error while renaming file: " + e);
            }
        }
    }

    public static List<Path> readDir(Path path) {
        List<Path> result = new ArrayList<>();
        try {
            if(Files.isDirectory(path)) {
                DirectoryStream<Path> dir = Files.newDirectoryStream(path);
                for(Path file : dir) {
                    result.add(file);
                }
            } else {
                System.out.println("Error not a directory");
            }
        } catch(IOException e) {
            System.out.println("Error while reading directory: " + e);
        }
        return result;
    }

    public static List<Image> createImgObjects(List<Path> paths) {
        List<Image> list = new ArrayList<>();

        for(Path p : paths) {
            System.out.println(p);
            BufferedImage loadedImage = loadImage(p);
            if(loadedImage != null) {
                Image image = new Image(loadedImage, p);
                list.add(image);
            }
        }
        return list;
    }

    public static BufferedImage loadImage(Path path) {
        try {
            BufferedImage buffer = ImageIO.read(path.toFile());
            return buffer;
        } catch (IOException e) {
            return null;
        }
    }
}

class Image {
    int width;
    int height;
    Color averageColor;
    Color closest = new Color(255,255,255);
    Path path;
    BufferedImage img;
    String format;

    Image(BufferedImage img, Path path) {
        this.height = img.getHeight();
        this.width = img.getWidth();
        this.averageColor = aveColor(img);
        this.img = img;
        this.path = path;
        this.format = path.toString().substring(path.toString().lastIndexOf("."));
    }

    public void setClosest(Color color) {
        this.closest = color;
    }

    public Color getClosest() {
        return closest;
    }

    public Path getPath() {
        return path;
    }

    public String getFormat() {
        return format;
    }

    public Color getrgb() {
        return averageColor;
    }

    public void setPath(Path path) {
        this.path = path;
    }

    Color aveColor(BufferedImage loadedImage) {
        int[] sum = new int[3];
        int size = width*height;

        int[] rgbData = loadedImage.getRGB(0, 0, width, height, null, 0, width);

        for(int i = 0; i < height; i++) {
            for(int j = 0; j < width; j++) {
                int red = (rgbData[(i * width) + j] >> 16) & 0xff;
                int green = (rgbData[(i * width) + j] >> 8) & 0xff;
                int blue = (rgbData[(i * width) + j]) & 0xff;
                if(!(red < 25 && green < 25 && blue < 25)) {
                    sum[0] += red;
                    sum[1] += green;
                    sum[2] += blue;
                }
            }
        }

        sum[0] = (int)Math.floor(sum[0]/size);
        sum[1] = (int)Math.floor(sum[1]/size);
        sum[2] = (int)Math.floor(sum[2]/size);

        return new Color(sum[0], sum[1], sum[2]);
    }
}