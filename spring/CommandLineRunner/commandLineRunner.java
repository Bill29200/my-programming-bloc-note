// in the application.java
//-----------------------------------------------
@Bean
CommandLineRunner public static void start(ExampleRepository exempleRepository,
                                           Exemple2Repository exemple2Repository
                                            .......
                                            )
        {
            return args -> {
                // fill the database
        };

}
//-----------------------------------------