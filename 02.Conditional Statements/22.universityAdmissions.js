function universityAdmissions(score, activities) {

    if (score >= 90 || (score >= 80 && activities >= 2)) {
        console.log("Admitted");
    } else {
        console.log("Not admitted");
    }

}

universityAdmissions(85, 3);
universityAdmissions(88, 1);
universityAdmissions(91, 0);
universityAdmissions(75, 12);