// in the application.java
//-----------------------------------------------
@Bean
CommandLineRunner public static void start(ExampleRepository exempleRepository,
                                           Exemple2Repository exemple2Repository
                                            .......
                                            )
        {
            return args -> {
                Stream.of("Hassan","Yassine","Aicha").forEach(name ->{
                Exemple exemple = new Exemple();
                exemple.setName(name);
                exemple.setEmail(name+"@gmail.com");
                //.....
                exempleRepository.save(exemple);
        }

        )
                // fill the database
        };

}
//-----------------------------------------