package com.turing.api.user.service;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.SplittableRandom;
import java.util.stream.Stream;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
@Slf4j
@ExtendWith(MockitoExtension.class)
public class SubstringDemo {

    @Test
    public void 문자열_분할()throws Exception{

       String str = new StringBuilder()
               .append("def")
               .insert(0,"abc")
               .toString();

        // a,b,c,d,e,f
        System.out.println(str);

        String[] arr =str.split(",");

        assertThat(arr.length).isEqualTo(6);
    }

    @Test
    public void 주민번호로_성별_구분()throws Exception {
        String human1 = "970101-1";
        String human2 = "950101-2";
        String human3 = "020101-3";
        String human4 = "050101-4";
        // 외국인
        String human5 = "730101-5";
        String human6 = "820101-6";
        String human7 = "120101-7";
        String human8 = "050101-8";
    }
        private String getGender(String ssn) {
            return switch (ssn) {
                case "1", "3", "5" -> "남자";
                case "2", "4", "6" -> "여자";
                default -> "Error";
            };
        }
        @Test
        public void now(){
        LocalDate now = LocalDate.now();
        int year = now.getYear();
        assertThat(year).isEqualTo(2024);
        int month = now.getMonthValue();
        assertThat(month).isEqualTo(4);
        int day = now.getDayOfMonth();
        assertThat(day).isEqualTo(24);
    }
    @Test
    public void birthYear(){
       String ssn = "970101-1";
       int birthYear = Integer.parseInt(ssn.substring(0,2));
//       if(ssn.substring(7).equals("1")){
//           birthYear = birthYear + 1900;
//       }
        switch (ssn.substring(7)) {
            case "1", "2", "5","6" -> birthYear = birthYear + 1900;
        };
       assertThat(birthYear).isEqualTo(1997);

        String ssn2 = "020101-3";
        int birthYear2 = Integer.parseInt(ssn2.substring(0,2));
//        if(ssn2.substring(7).equals("3")){
//            birthYear2 = birthYear2+2000;
//        }
        switch (ssn2.substring(7)) {
            case "3", "4" ,"7","8" -> birthYear2 = birthYear2 + 2000;
        };
        assertThat(birthYear).isEqualTo(1997);
        assertThat(birthYear2).isEqualTo(2002);
    }

    @Test
    public void getOldAge(){
        LocalDate now = LocalDate.now();
        int year = now.getYear();
        int month = now.getMonthValue();
        int day = now.getDayOfMonth();
        int age = 0;
        String ssn = "000414-3";
        int birthYear = Integer.parseInt(ssn.substring(0,2));
        birthYear = switch (ssn.substring(7)) {
            case "1", "2", "5","6" ->  birthYear + 1900;
            case "3", "4" ,"7","8" ->  birthYear + 2000;
            default -> birthYear + 1800;
        };
        age = year - birthYear;

        int birthMonth = Integer.parseInt(ssn.substring(2,4));
        int birthDay = Integer.parseInt(ssn.substring(4,6));
        if(birthMonth>month){
            age-=1;
        }else if(birthMonth==month){
            if(birthDay<day){
                age-=1;
            }
        }
        assertThat(age).isEqualTo(23);

    }
    @Test
    public void getAgeUsingLambda(){
        String ssn2 = "000414-3";
        int fullYear = Integer.parseInt(LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd")));
        int age = Stream.of(ssn2)
                .map(ssn->Integer.parseInt(ssn2.substring(0,2)))
                .map(birthYear->switch (ssn2.substring(7)) {
                    case "1", "2", "5", "6" -> birthYear + 1900;
                    case "3", "4", "7", "8" -> birthYear + 2000;
                    default -> birthYear + 1800;})
                .map(i-> i*10000) //20000000
                .map(i -> i + Integer.parseInt(ssn2.substring(2,6))) //20000414
                .map(i ->(fullYear-i)/10000) //
                .findFirst()
                .get();

    }





//        String [] arr1 = {human1,human2,human3,human4,human5};
//        String[] jen = new String[5];
//        String[] age = new String[5];
//
//        int[] res = new int[5];
//        for(int i=0;i<5;i++){
//            if(Integer.valueOf(arr1[i].substring(7))%2==1){
//            jen[i] = "남자";
//            }else{
//                jen[i] = "여자";
//            }
//        }
//        for(int i=0;i<5;i++){
//           age[i] = arr1[i].substring(0,2);
//           if(Integer.valueOf(age[i].substring(0,1))!=0 && Integer.valueOf(age[i].substring(0,1))!=1){
//               res[i]=(100-(Integer.valueOf(age[i].substring(0)))+24);
//           }else {
//               res[i]=(10-(Integer.valueOf(age[i].substring(1)))+14);
//           }
//        }
//        for(int i=0;i<5;i++){
//            System.out.println("성별 : "+jen[i]+" 나이 :"+ res[i]+"살");
//        }
//        System.out.println(Integer.valueOf(arr1[1].substring(7)));
//
//
//        // abcdef
//        String arr = null;
//        //주민번호를 통해서 나이와 성별을 출력하시오 단 나이는 만 나이로 표기하시오
//
//    }

        }