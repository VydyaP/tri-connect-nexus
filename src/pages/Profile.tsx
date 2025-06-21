
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.number().min(18, "Must be at least 18 years old").max(100, "Age must be realistic"),
  location: z.string().min(2, "Location is required"),
  profession: z.enum(["developer", "doctor", "founder"]),
  specialization: z.string().min(1, "Specialization is required"),
  experience: z.string().min(1, "Experience is required"),
  bio: z.string().min(50, "Bio must be at least 50 characters").max(500, "Bio must be less than 500 characters"),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
  education: z.string().min(1, "Education is required"),
  company: z.string().optional(),
  skills: z.array(z.string()).min(1, "Add at least one skill"),
  lookingFor: z.string().min(1, "Please specify what you're looking for"),
  relationshipType: z.enum(["serious", "casual", "friendship", "networking"]),
});

type ProfileForm = z.infer<typeof profileSchema>;

const developerTypes = [
  "Frontend Developer", "Backend Developer", "Full Stack Developer", 
  "Mobile Developer", "DevOps Engineer", "Data Engineer", 
  "Machine Learning Engineer", "UI/UX Developer", "Game Developer", 
  "Blockchain Developer", "Cloud Engineer", "Security Engineer"
];

const doctorTypes = [
  "Cardiologist", "Neurologist", "Pediatrician", "Dermatologist", 
  "Orthopedic Surgeon", "Emergency Medicine", "Psychiatrist", 
  "Radiologist", "Anesthesiologist", "Oncologist", "Gynecologist", 
  "General Practitioner"
];

const founderTypes = [
  "Tech Startup", "FinTech", "HealthTech", "EdTech", "E-commerce", 
  "SaaS", "AI/ML Startup", "Blockchain", "Green Tech", "Food Tech", 
  "Social Impact", "B2B Services"
];

const commonInterests = [
  "Technology", "Reading", "Travel", "Fitness", "Music", "Art", "Cooking", 
  "Photography", "Hiking", "Gaming", "Movies", "Sports", "Dancing", "Writing"
];

const experienceLevels = [
  "Entry Level (0-2 years)", "Mid Level (3-5 years)", "Senior Level (6-10 years)", 
  "Expert Level (10+ years)", "Student/Recent Graduate"
];

const Profile = () => {
  const [customSpecialization, setCustomSpecialization] = useState("");
  const [customSkills, setCustomSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const { toast } = useToast();

  const form = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      interests: [],
      skills: [],
      relationshipType: "serious",
    },
  });

  const watchedProfession = form.watch("profession");

  const getSpecializationOptions = () => {
    switch (watchedProfession) {
      case "developer":
        return developerTypes;
      case "doctor":
        return doctorTypes;
      case "founder":
        return founderTypes;
      default:
        return [];
    }
  };

  const addCustomSkill = () => {
    if (newSkill.trim() && !customSkills.includes(newSkill.trim())) {
      const updatedSkills = [...customSkills, newSkill.trim()];
      setCustomSkills(updatedSkills);
      form.setValue("skills", updatedSkills);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    const updatedSkills = customSkills.filter(skill => skill !== skillToRemove);
    setCustomSkills(updatedSkills);
    form.setValue("skills", updatedSkills);
  };

  const onSubmit = (data: ProfileForm) => {
    console.log("Profile data:", data);
    toast({
      title: "Profile Updated!",
      description: "Your profile has been successfully saved.",
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1">
          <Header />
          
          <div className="pt-20 pb-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="mb-6">
                <SidebarTrigger />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-center">
                    Complete Your Profile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Basic Information */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="age"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Age</FormLabel>
                              <FormControl>
                                <Input 
                                  type="number" 
                                  placeholder="Enter your age" 
                                  {...field}
                                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="City, State/Country" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Professional Information */}
                      <FormField
                        control={form.control}
                        name="profession"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Profession</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your profession" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="developer">Developer</SelectItem>
                                <SelectItem value="doctor">Doctor</SelectItem>
                                <SelectItem value="founder">Founder</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Dynamic Specialization */}
                      {watchedProfession && (
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="specialization"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  {watchedProfession === "developer" && "Developer Type"}
                                  {watchedProfession === "doctor" && "Medical Specialty"}
                                  {watchedProfession === "founder" && "Startup Category"}
                                </FormLabel>
                                <Select 
                                  onValueChange={(value) => {
                                    if (value === "custom") {
                                      field.onChange(customSpecialization);
                                    } else {
                                      field.onChange(value);
                                      setCustomSpecialization("");
                                    }
                                  }} 
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select or choose custom" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {getSpecializationOptions().map((option) => (
                                      <SelectItem key={option} value={option}>
                                        {option}
                                      </SelectItem>
                                    ))}
                                    <SelectItem value="custom">Custom (Type below)</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {(form.watch("specialization") === "custom" || customSpecialization) && (
                            <div>
                              <Label>Custom Specialization</Label>
                              <Input
                                value={customSpecialization}
                                onChange={(e) => {
                                  setCustomSpecialization(e.target.value);
                                  form.setValue("specialization", e.target.value);
                                }}
                                placeholder="Enter your custom specialization"
                              />
                            </div>
                          )}
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Experience Level</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select experience level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {experienceLevels.map((level) => (
                                    <SelectItem key={level} value={level}>
                                      {level}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company/Organization (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your company" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="education"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Education</FormLabel>
                            <FormControl>
                              <Input placeholder="Degree, University/Institution" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Skills Section */}
                      <div className="space-y-4">
                        <Label>Skills</Label>
                        <div className="flex gap-2">
                          <Input
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            placeholder="Add a skill"
                            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addCustomSkill())}
                          />
                          <Button type="button" onClick={addCustomSkill}>
                            Add
                          </Button>
                        </div>
                        {customSkills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {customSkills.map((skill) => (
                              <div
                                key={skill}
                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                              >
                                {skill}
                                <button
                                  type="button"
                                  onClick={() => removeSkill(skill)}
                                  className="text-primary hover:text-primary/70"
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Interests */}
                      <FormField
                        control={form.control}
                        name="interests"
                        render={() => (
                          <FormItem>
                            <FormLabel>Interests</FormLabel>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                              {commonInterests.map((interest) => (
                                <FormField
                                  key={interest}
                                  control={form.control}
                                  name="interests"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={interest}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(interest)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, interest])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) => value !== interest
                                                    )
                                                  )
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal">
                                          {interest}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Bio */}
                      <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about yourself..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Relationship Type */}
                      <FormField
                        control={form.control}
                        name="relationshipType"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>What are you looking for?</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="serious" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Serious Relationship
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="casual" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Casual Dating
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="friendship" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Friendship
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="networking" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Professional Networking
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lookingFor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What are you looking for in a partner?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your ideal partner..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full" size="lg">
                        Save Profile
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Profile;
